async function Footer() {
  return (
    <footer className="w-full">
      <div className="flex bg-zinc-900 py-4 ">
        <div className="container">
          <div className="flex w-full items-center justify-between gap-2">
            <span className="mr-2 text-sm text-gray-400">
              <span className="text-lg">© </span>
              {"Logos" + ", " + new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
