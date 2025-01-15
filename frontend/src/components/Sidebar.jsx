import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore.js";
import SidebarSkeleton from "./skelatons/SidebarSkelton";
import { Users } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly ? users.filter(user => onlineUsers.includes(user._id)) : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-base-300 flex flex-col transition-all duration-300 bg-base-100 shadow-lg rounded-lg">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-3">
          <Users className="text-xl" />
          <span className="font-medium text-lg hidden lg:block">All Community Members</span>
        </div>
        {/* Online Users Toggle */}
        <div className="mt-3 hidden lg:flex items-center gap-3">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm checkbox-accent"
            />
            <span className="text-sm">Show online only</span>
          </label>
          <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-4
              hover:bg-base-200 transition-all duration-200 rounded-md
              ${selectedUser?._id === user._id ? "bg-base-300 ring-2 ring-base-400" : ""}
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="w-12 h-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"
                />
              )}
            </div>

            {/* User info - visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-zinc-500 py-4">No users available</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
