import { socialLinks } from "@/config/link"

function Header() {
    return (
        <header className="flex justify-center gap-5 items-center my-8">
            <nav className="space-x-5 bg-violet-200 rounded-full px-4 py-2">
                {socialLinks.map((link) => (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        key={link.label}
                        href={link.url}
                        className="text-lg font-medium capitalize text-violet-800 hover:text-violet-600"
                    >
                        {link.label}↗️
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Header