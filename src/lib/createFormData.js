
export const createFormData = (files) => {
	const formData = new FormData()

	for (let i = 0; i < files.length; i++) {
		if (files[i]) {
			formData.append('files', files[i])
		}
	}
	return formData
}