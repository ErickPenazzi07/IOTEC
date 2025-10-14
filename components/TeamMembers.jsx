import React from 'react'

const TeamMembers = ({image, name,role}) => {
  return (  <div className="flex flex-col items-center text-center p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full object-cover mb-4"
    />
    <h3 className="text-xl font-semibold text-card-foreground">{name}</h3>
    <p className="text-muted-foreground">{role}</p>
  </div>
  )
}

export default TeamMembers