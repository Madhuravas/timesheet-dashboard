function StatusCard({title}:{title:string}) {
      return(
        <div className={`${title === "COMPLETED" ? "bg-[#DEF7EC] text-[#03543F]" : title === "INCOMPLETE" ? "bg-[#FDF6B2] text-[#723B13]" : "bg-[#FCE8F3] text-[#99154B]"} inline-block px-2 py-1 rounded-md text-[12px] font-semibold`}>
            <span>{title}</span>
        </div>
      )
};

export default StatusCard;