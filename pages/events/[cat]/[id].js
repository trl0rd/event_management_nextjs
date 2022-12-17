import SingleEvent from '../../../src/components/events/singEvent';

const EventPage = ({data}) => {
    return <SingleEvent data={data}/>
}

export default EventPage;

export async function getStaticPaths(){
    const {allEvents} = await import('../../../data/data.json')
    const data = allEvents.map((ev) => {
        return {
            params:{
                cat:ev.city,
                id:ev.id.toString()
            }
        }
    })
    return {
        paths:data,
        fallback:false
    }
}

export async function getStaticProps(context){
    const {allEvents} = await import('../../../data/data.json')
    const data = allEvents.find((ev) => ev.id===context?.params.id)
    return {
        props : {data}
    }
}
