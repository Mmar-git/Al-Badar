import UpdateButton from "@/components/UpdateButton";
import { updateUser } from "@/lib/actions";
import { wixClientServer } from "@/lib/wixClientServer";
import { members } from "@wix/members";
import Link from "next/link";
import { format } from "timeago.js";
export const dynamic = "force-dynamic";
const ProfilePage = async () => {
  const wixClient = await wixClientServer();

  try {
    const user = await wixClient.members.getCurrentMember({
      fieldsets: [members.Set.FULL],
    });

    if (!user || !user.member?.contactId) {
      return <div className="">Not logged in!</div>;
    }

    const orderRes = await wixClient.orders.searchOrders({
      search: {
        filter: { "buyerInfo.contactId": { $eq: user.member?.contactId } },
      },
    });

    const orders = orderRes?.orders || [];
    return (
      <div className="flex flex-col md:flex-row gap-24 h-screen items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl text-yellow">Profile</h1>
          <form action={updateUser} className="mt-12 flex flex-col gap-4">
            <input
              type="text"
              hidden
              name="id"
              value={user.member.contactId}
              className="bg-transparent rb-1 ring-yellow"
            />
            <label className="text-lg text-yellow">Username</label>
            <input
              type="text"
              name="username"
              placeholder={user.member?.profile?.nickname || "john"}
              className="rounded-md p-2 max-w-96 bg-transparent focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
            />
            <label className="text-lg text-yellow">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder={user.member?.contact?.firstName || "John"}
              className="rounded-md p-2 max-w-96 bg-transparent focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
            />
            <label className="text-lg text-yellow">Surname</label>
            <input
              type="text"
              name="lastName"
              placeholder={user.member?.contact?.lastName || "Doe"}
              className="rounded-md p-2 max-w-96 bg-transparent focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
            />
            <label className="text-lg text-yellow">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder={
                (user.member?.contact?.phones &&
                  user.member?.contact?.phones[0]) ||
                "+1234567"
              }
              className="rounded-md p-2 max-w-96 bg-transparent focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
            />
            <label className="text-lg text-yellow">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder={user.member?.loginEmail || "john@gmail.com"}
              className="rounded-md p-2 max-w-96 bg-transparent focus:outline-none"
              style={{ borderBottom: "1px solid #B68D3B" }}
            />
            <UpdateButton />
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl text-yellow">Orders</h1>
          <div className="mt-12 flex flex-col">
            {orderRes.orders.length > 0 ? (
              orderRes.orders.map((order) => (
                <Link
                  href={`/orders/${order._id}`}
                  key={order._id}
                  className="flex justify-between px-2 py-6 rounded-md hover:ring-1 hover:ring-yellow even:bg-slate-100"
                >
                  <span className="w-1/4">
                    {order._id?.substring(0, 10)}...
                  </span>
                  <span className="w-1/4">
                    ${order.priceSummary?.subtotal?.amount}
                  </span>
                  {order._createdDate && (
                    <span className="w-1/4">{format(order._createdDate)}</span>
                  )}
                  <span className="w-1/4">{order.status}</span>
                </Link>
              ))
            ) : (
              <p className="text-lg text-gray-500">No orders found</p>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Error loading profile data</p>
      </div>
    );
  }
};

export default ProfilePage;
