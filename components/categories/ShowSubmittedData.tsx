import { AlertDialogFooter } from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { DialogClose, DialogContent } from "../ui/dialog";

export default ({submittedData}:{submittedData:Record<string, string>[]}) => {
  return (
    submittedData.length > 0 && (
      <DialogContent className="sm:max-w-[425px] overflow-y-scroll h-auto">
        <div className="mt-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Property</th>
                <th className="border border-gray-300 px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {data.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AlertDialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </AlertDialogFooter>
      </DialogContent>
    )
  );
};
