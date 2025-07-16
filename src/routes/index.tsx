import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <code style={{ fontSize: "2rem" }}>Damian Amodeo</code>
      This is my website and a way to tell about myself.
      <Link to="/mantine/buttons">Mantine</Link>
    </div>
  );
}
