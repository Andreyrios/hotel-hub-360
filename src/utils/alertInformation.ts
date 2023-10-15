import Swal from "sweetalert2";

interface Props {
  title: string
  color: string
  message: string
  icon?: any
}

function alertInformation({ title, color, message, icon }: Props) {
  Swal.fire({
    icon,
    title,
    text: message,
    allowEnterKey: false,
    allowEscapeKey: false,
    confirmButtonText: "Ok",
    confirmButtonColor: color,
  }).then((result) => {

  });
}

export default alertInformation;
