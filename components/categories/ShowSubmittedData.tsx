import { AlertDialogFooter } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { DialogClose, DialogContent } from "@/components/ui/dialog"
import type { SubmittedData } from "@/types/CategoryType"

interface ShowSubmittedDataProps {
  submittedData: SubmittedData[]
}

export default function ShowSubmittedData({ submittedData }: ShowSubmittedDataProps) {
  if (submittedData.length === 0) return null

  return (
    <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Submitted Data</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2 text-left">Property</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">{data.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
}
