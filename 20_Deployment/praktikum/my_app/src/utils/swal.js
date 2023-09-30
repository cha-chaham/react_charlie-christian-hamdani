import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import "animate.css";

const MySwal = Swal.mixin({
  reverseButtons: true,
  showCancelButton: true,
  showClass: {
    popup: "animate__animated animate__bounceIn animate__faster",
  },
  hideClass: {
    popup: "animate__animated animate__bounceOut animate__faster",
  },
});

export default withReactContent(MySwal);
