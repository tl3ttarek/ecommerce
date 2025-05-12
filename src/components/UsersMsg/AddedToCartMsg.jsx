import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export function AddedToCartMsg() {
  MySwal.fire({
    position: "center",
    icon: "success",
    title: "Added To Your Cart",
    showConfirmButton: true,
    timer: 2000,
    iconColor: "#fff",
  });
}
