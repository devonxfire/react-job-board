import { useParams, useLoaderData } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return <h1>{job.title}</h1>;
};

// Alternate way to fetch data
const jobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  const data = await response.json();
  console.log(data);
  return data;
};

// useEffect(() => {
//   const fetchJob = async () => {
//     try {
//       const response = await fetch(`/api/jobs/${id}`);

//       const job = await response.json();

//       setJob(job);
//     } catch (error) {
//       console.log("Error fetching job", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   fetchJob();
// }, []);

export { JobPage as default, jobLoader };
