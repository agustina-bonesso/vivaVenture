import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Layout({ children, getRandomActivity, onChange }) {
  return (
    <>
      <Header getRandomActivity={getRandomActivity} onChange={onChange} />
      <main>{children}</main>
      <NavBar getRandomActivity={getRandomActivity} />
    </>
  );
}
