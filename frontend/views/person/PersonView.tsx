import { AutoCrud } from "@hilla/react-crud";
import PersonModel from "Frontend/generated/com/example/application/entities/PersonModel";
import { PersonService } from "Frontend/generated/endpoints";

export default function PersonView() {
  const columnsToHide = ['id']
  const visibleColumns = Object.getOwnPropertyNames(PersonModel.prototype).filter((key) => columnsToHide.indexOf(key) == -1) 
  const fieldsToHide = ['id', 'version']
  const visibleFields = Object.getOwnPropertyNames(PersonModel.prototype).filter((key) => fieldsToHide.indexOf(key) == -1)

  return (
    <AutoCrud service={PersonService} model={PersonModel} gridProps={{ visibleColumns }} formProps={{ visibleFields }} />
  )
}