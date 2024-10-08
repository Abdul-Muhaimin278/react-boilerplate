const initialState = {
	studentsData: [],
	lastVisible: null,
	isAdding: false,
	isDeleting: false,
	isUpdating: false,
	toggleBtn: null,
	hasMore: true,
};

const setStudents = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH": {
			const { students, hasMore, lastVisible } = action.payload;

			return {
				...state,
				studentsData: students,
				lastVisible,
				hasMore,
			};
		}

		case "LOAD_MORE": {
			const { students, hasMore, lastVisible } = action.payload;

			return {
				...state,
				studentsData: [...state.studentsData, ...students],
				lastVisible,
				hasMore,
			};
		}

		case "ADD_STUDENT_PENDING":
			return {
				...state,
				isAdding: true,
			};

		case "ADD_STUDENT":
			return {
				...state,
				studentsData: [action.payload, ...state.studentsData],
				isAdding: false,
			};

		case "ADD_STUDENT_ERROR":
			return {
				...state,
				isAdding: false,
			};

		case "DELETE_STUDENT_PENDING":
			return {
				...state,
				isDeleting: true,
			};

		case "DELETE_STUDENT": {
			const { id } = action.payload;
			const editStudent = state.studentsData.filter(
				(student) => student.id !== id
			);
			return {
				...state,
				studentsData: editStudent,
				isDeleting: false,
			};
		}

		case "DELETE_STUDENT_ERROR":
			return {
				...state,
				deleting: false,
			};

		case "EDIT_STUDENT_PENDING":
			return {
				...state,
				isUpdating: true,
			};

		case "EDIT_STUDENT": {
			const { id } = action.payload;

			const updatedStudent = state.studentsData.map((student) =>
				student.id === id ? { ...student, ...action.payload } : student
			);
			return {
				...state,
				studentsData: updatedStudent,
				isUpdating: false,
				toggleBtn: null,
			};
		}

		case "EDIT_STUDENT_ERROR":
			return {
				...state,
				isUpdating: false,
			};

		case "TOGGLE":
			return {
				...state,
				toggleBtn: action.payload,
			};

		default:
			return state;
	}
};

export default setStudents;
