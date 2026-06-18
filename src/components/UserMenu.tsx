import { authClient } from "@/lib/auth-client";
import { UserIcon } from "@/data/icons.tsx";

export function UserMenu() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return null;
  }

  if (!session) {
    return (
      <button
        className="navbar-icon-button"
        onClick={() => authClient.signIn.social({ provider: "google" })}
      >
        <UserIcon />
      </button>
    );
  }

  return (
    <button
      className="navbar-icon-button"
      onClick={() => authClient.signOut()}
      title={session.user.name}
    >
      {session.user.image ? (
        <img
          src={session.user.image}
          alt={session.user.name}
          referrerPolicy="no-referrer"
          style={{ width: 24, height: 24, borderRadius: "50%" }}
        />
      ) : (
        <UserIcon />
      )}
    </button>
  );
}
