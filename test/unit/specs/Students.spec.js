import Students from "@/components/Students.vue";
import Student from "@/components/Student.vue";
import { shallowMount } from "@vue/test-utils";

describe("Student.vue", () => {
  test("render correct number of students", () => {
    const students = [
      {
        firstname: "StudentFirstName",
        lastname: "StudentLastName"
      },
      {
        firstname: "Test",
        lastname: "number2"
      }
    ];

    const wrapper = shallowMount(Students, {
      propsData: {
        students: students
      }
    });
    expect(wrapper.findAll(Student)).toHaveLength(students.length);
  });
});
