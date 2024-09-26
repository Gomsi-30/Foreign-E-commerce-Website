
type HeaderProps = {
    heading : string;
}
const Header = ({heading}:HeaderProps)=> {
   return (
     <h1 className="text-pink-400 text-2xl font-semibold text-center">{heading}</h1>
   )
}

export default Header;