import ItineraryCard from "./ItineraryCard";
import ItineraryContainerHeader from "./ItineraryContainerHeader";

function ItinerariesContainer(){
    const itineraries = [{
            id: 1,
            trip_id: 1,
            name: 'Itinerary A',
            is_favorite: true,
            total_cost: '$1560',
            start_date: '29-09-2022',
            end_date: '15-10-2022',
            travel_time: '30'
        },
        {
            id: 2,
            trip_id: 1,
            name: 'Itinerary B',
            is_favorite: true,
            totalCost: '$1560',
            start_date: '29-09-2022',
            end_date: '15-10-2022',
            travel_time: '30'
        },
        {
            id: 3,
            trip_id: 1,
            name: 'Itinerary C',
            is_favorite: true,
            totalCost: '$1560',
            start_date: '29-09-2022',
            end_date: '15-10-2022',
            travel_time: '30'
        },
        {
            id: 4,
            trip_id: 1,
            name: 'Itinerary D',
            is_favorite: true,
            totalCost: '$1560',
            start_date: '29-09-2022',
            end_date: '15-10-2022',
            travel_time: '30'
        }
    ]
    const itineraryCards = itineraries.map(itinerary => {
        return (
            <ItineraryCard key={itinerary.id} itinerary={itinerary}></ItineraryCard>
        )
    })

    return (
        <>
            <ItineraryContainerHeader></ItineraryContainerHeader>
            {itineraryCards}
        </>
    )
}

export default ItinerariesContainer;