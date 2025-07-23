import BlogTop from './BlogTop'
import Container from '../../common/Container'
import BlogMiddle from './BlogMiddle'
import BlogBottom from './BlogBottom'
import { Link } from 'react-router'
import { GoArrowRight } from "react-icons/go";

export default function Blog() {
  return (
    <Container>
        
        <BlogTop/>

        <BlogMiddle/>

        <BlogBottom/>


        <Link to={`/`} className='w-fit ml-auto lg:mt-10 md:mt-7 mt-5 mb-15 font-inter md:font-bold font-semibold text-base text-white p-2.5 bg-[#6B46C1] rounded-[5px] flex  itcems-center gap-2 mr-1 md:mr-0  '><span>See More</span> <GoArrowRight className='text-2xl' /></Link>
        
    </Container>
  )
}
