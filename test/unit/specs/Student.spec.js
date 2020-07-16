import Student from "@/components/Student.vue";
import { shallowMount } from "@vue/test-utils";

describe("Student.vue", () => {
  test("render student", () => {
    const student = {
      firstname: "StudentFirstName",
      lastname: "StudentLastName"
    };

    const wrapper = shallowMount(Student, {
      propsData: {
        student: student
      }
    });
    expect(wrapper.text()).toContain(student.firstname);
    expect(wrapper.text()).toContain(student.lastname);
  });
});
