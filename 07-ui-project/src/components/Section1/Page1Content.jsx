
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 px-6 flex gap-10 items-centerpx-16 h-[90vh] ' >
      <LeftContent></LeftContent>
      <RightContent user={props.user}/>
    </div>
  )
}

export default Page1Content
