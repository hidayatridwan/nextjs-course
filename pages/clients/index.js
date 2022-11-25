import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "dono",
      name: "dono warkop",
    },
    {
      id: "kasino",
      name: "kasino warkop",
    },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>

      <ul>
        {clients.map((item) => (
          <li key={item.id}>
            <Link href={{ pathname: "/clients/[id]", query: { id: item.id } }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
