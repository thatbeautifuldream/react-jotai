import { useAtom } from "jotai";
import { loadableUserAtom } from "./atoms";

export const UserInfo = () => {
  const [user] = useAtom(loadableUserAtom);

  if (user.state === "hasError") {
    return <div>Error: "Unknown error"</div>;
  }

  if (user.state === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>UserInfo</div>
      {user.state === "hasData" && (
        <div>
          User: {user?.data?.name}
          <br />
          Email: {user?.data?.email}
        </div>
      )}
    </>
  );
};

export default UserInfo;
