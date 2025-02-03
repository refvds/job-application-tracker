import { JobTable } from './components/shared/job-table';

function App() {
  return (
    <main className='flex justify-center items-center h-screen bg-[linear-gradient(90deg,_hsla(64,_41%,_92%,_1)_0%,_hsla(196,_83%,_84%,_1)_50%,_hsla(305,_75%,_83%,_1)_100%)]'>
      <div className='max-w-5xl'>
        <JobTable />
      </div>
    </main>
  );
}

export default App;
