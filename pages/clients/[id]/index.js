import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // router.push("/clients/dono/projectdono");
    // or
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "dono", clientprojectid: "projectdono" },
    });
  }

  return (
    <div>
      <h1>The Project a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectPage;
