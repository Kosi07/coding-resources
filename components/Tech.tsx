import ResourceCard from "./ResourceCard"

export type Resource = {
  _id: string
  icon: string
  title: string
  description: string
  tag: string
  href: string
}

const Tech = ({ tech, resourceArray, id } : {tech: string, resourceArray: Resource[], id: string}) => {
  return (
    <div id={id} className='my-4'>
        <h3 className='font-semibold text-2xl'>
            {tech}
        </h3>

        <div className='flex flex-row gap-6 flex-wrap'>
            {resourceArray.map((resource) => <ResourceCard key={resource.title+resource.description} icon={resource.icon} title={resource.title} description={resource.description} tag={resource.tag} href={resource.href} />)}
        </div>
    </div>
  )
}

export default Tech