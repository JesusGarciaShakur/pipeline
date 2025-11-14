import PageTitle from "../../../../../components/page-title";
import EventForm from "../common/event-form";

function CreateEvenetPage() {
  return (
    <div>
      <PageTitle title="Crear Evento" />

      <div className="mt-5">
        <EventForm type="create" initialData={{}} />
      </div>
    </div>
  );
}

export default CreateEvenetPage;
