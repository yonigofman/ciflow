import {Suspense} from "react";
import {Skeleton} from "@/components/ui/skeleton";
import {waitFor} from "@/lib/helper/wairFor";


function WorkflowsPage() {
  return (
      <div className="flex-1 flex flex-col h-full">
          <div className="flex justify-between">
              <div className="flex flex-col">
                  <h1 className="text-3xl font-bold ">Workflows</h1>
                  <p className="text-muted-foreground">Create and manage your workflows</p>
              </div>
          </div>
          <div className="h-full py-6">
              <Suspense fallback={<UserWorkflowsSkeleton/>}>
                  <UserWorkflows/>
              </Suspense>
          </div>
      </div>
  );
}

function UserWorkflowsSkeleton() {
    return (
        <div className="space-y-2">
            {
                [1, 2, 3, 4].map((index) => (
                    <Skeleton key={index} className="h-24 w-full"/>
         ))
        }
    </div>
  );
}

async function UserWorkflows() {
    await waitFor(3000);
    return <div>Workflows</div>;
}

// function UserWorkflows() {
//   return (
//     <div className="flex flex-col gap-4">
//       <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//               <div className="w-10 h-10 rounded-full bg-primary/90"/>
//               <div className="w-1/4 h-6 bg-primary/90 rounded-md"/>
//           </div>
//           <div className="w-1/4 h-6 bg-primary/90 rounded-md"/>
//       </div>
//       <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//               <div className="w-10 h-10 rounded-full bg-primary/90"/>
//               <div className="w-1/4 h-6 bg-primary/90 rounded-md"/>
//           </div>
//           <div className="w-1/4 h-6 bg-primary/90 rounded-md"/>
//       </div>
//       <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//               <div className="w-10 h-10 rounded-full bg-primary/90"/>
//               <div className="w-1/4 h-6 bg-primary/90 rounded-md"/>
//           </div>
//           <div className="w-1/4 h-6 bg-primary/90 rounded-md"/>
//       </div>
//       <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//               <div className="w-10 h-10 rounded-full bg-primary/90"/>
//               <div className="w-1/4 h-6 bg-primary/90 rounded-md"/>
//           </div>
//           <div className="w-1/4 h-6 bg-primary/90 rounded-md"/>
//       </div>
//     </div>
//   );
// }

export default WorkflowsPage;