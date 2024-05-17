function SectionHeader({title, id, ...props}: { title: string, id?: string }) {
    return <div id={id} className="flex py-3 border-0 border-b border-geyser border-solid" {...props}>
        <h4 className="text-halfBlack px-7 font-medium ">{title}</h4>
    </div>
}

export default SectionHeader
