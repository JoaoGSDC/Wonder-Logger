import SweetAlert from 'sweetalert2'

const DefaultAlert = (icon, title, text) => {
  const customAlert = SweetAlert.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  return customAlert.fire({
    icon,
    title,
    text
  })
}

export default DefaultAlert
