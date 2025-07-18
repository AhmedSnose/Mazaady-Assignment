import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CategoryForm from "@/components/categories/CategoryForm"
import { DataService } from "@/lib/services/DataService"

// Mock DataService
jest.mock("@/lib/services/DataService")

const mockCategories = [
  { id: 1, name: "Electronics", children: [{ id: 10, name: "Phones" }] },
]

const mockProperties = [
  { id: 1, name: "Brand", options: [{ id: 101, name: "Apple" }] },
]

beforeEach(() => {
  jest.clearAllMocks()
  ;(DataService.getCategories as jest.Mock).mockResolvedValue(mockCategories)
  ;(DataService.getProperties as jest.Mock).mockResolvedValue(mockProperties)
  ;(DataService.findCategoryById as jest.Mock).mockImplementation((cats, id) =>
    cats.find((c) => c.id === id)
  )
})

test("renders CategoryForm and selects category with Radix workaround", async () => {
  const user = userEvent.setup()
  render(<CategoryForm />)

  await waitFor(() => expect(screen.getByText("Main Category")).toBeInTheDocument())

  // Open main category dropdown
  await user.click(screen.getAllByRole("combobox")[0])

  // Wait for option to appear (with role)
  await waitFor(() => expect(screen.getByRole("option", { name: "Electronics" })).toBeVisible())

  await user.click(screen.getByRole("option", { name: "Electronics" }))

  // Check subcategory select
  await waitFor(() => expect(screen.getByText("Sub Category")).toBeInTheDocument())
  await user.click(screen.getAllByRole("combobox")[1])

  await waitFor(() => expect(screen.getByRole("option", { name: "Phones" })).toBeVisible())
  await user.click(screen.getByRole("option", { name: "Phones" }))

  // Properties
  await waitFor(() => expect(screen.getByText("Brand")).toBeInTheDocument())
  await user.click(screen.getAllByRole("combobox")[2])
  await waitFor(() => expect(screen.getByRole("option", { name: "Apple" })).toBeVisible())
  await user.click(screen.getByRole("option", { name: "Apple" }))

  // Submit
  await user.click(screen.getByRole("button", { name: "Submit" }))
  await waitFor(() => expect(screen.getByText("Submitted Data")).toBeInTheDocument())
})


