const NavBar = () => {
    return (
        <>
        <div className="w-screen bg-transparent z-50 fixed top-0 left-0 flex justify-between items-center py-4 px-5">
            <div className="text-3xl text-white fira-sans-medium">Lopt</div>
            <div className="text-sm text-white fira-sans-regular flex flex-row gap-7">
                <ul>Products</ul>
                <ul>Pricing</ul>
                <ul>About</ul>
                <ul>Blog</ul>
            </div>
            <button className="text-xs text-white fira-sans-regular rounded-[1.35rem] px-7 py-3 bg-[#6868ae]">Get Started</button>
            </div>
        </>
    )
}

export default NavBar;