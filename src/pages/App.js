import { ActivityCard } from '../components/ActivityCard';
import { ProfileCard } from '../components/ProfileCard';
import { ActivityProvider } from '../context/ActivityProvider';
import data from '../data/data.json';

const showCardActivity = (activity) => {
  const component = [];

  activity.map( (items,key) => {
    // console.log(items);
    return component.push(
      <ActivityCard key={`${key}-${items.title}`} activity={items} />
    );
  })

  return component

}

function App() {
  return (
    <ActivityProvider>
      <div className="text-white mx-auto max-w-[1024px] font-['Rubik'] px-3 py-20 md:h-screen md:flex md:items-center lg:px-6 xl:px-0">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          <ProfileCard data={data}/>
          {
            showCardActivity(data)
          }
        </div>      
      </div>
    </ActivityProvider>
  );
}

export default App;
