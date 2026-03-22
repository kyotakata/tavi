import Link from "next/link"

const headerStyle: React.CSSProperties = {
  backgroundColor: "#333",
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '#FFF',
  fontWeight: 700,
  padding: '24px',
};

const headerLinkStyle: React.CSSProperties = {
  color: '#FFF',
  textDecoration: 'none',
};


export const Header = () => {
  return (
    <header style={headerStyle}>
      <Link href="/" style={headerLinkStyle}>Tavi</Link>
    </header>
  )
}
