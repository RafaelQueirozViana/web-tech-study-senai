const Header = (props) => {
  const headerStyle = {
    backgroundColor: '#BEBEBE',
    padding: '20px',
    textAlign: 'center',
    borderBottom: '2px solid #696969',
  };

  const titleStyle = {
    fontSize: '24px',
    margin: '0',
    color: '#191970',
  };
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>{props.title}</h1>
    </header>
  );
}   

export default Header;
