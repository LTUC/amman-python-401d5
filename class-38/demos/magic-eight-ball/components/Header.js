export default function Header(props) {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-500 text-gray-50">
            <h1 className="text-4xl border border-color-black">{props.title} - {props.name}</h1>
            {props.children}
        </header>
    )
}