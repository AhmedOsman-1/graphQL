import Socials from "./Socials";



const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
        <p>Copyright &copy; 2025</p>

        <div className="flex items-center space-x-4 ">
            <Socials />

        </div>
    </footer>
  )
}

export default Footer