import { mount } from '@vue/test-utils';
import AppLoader from './AppLoader.vue';

// describe a test name
describe('AppLoader.vue', () => {
    // mount our spinner
    const wrapper = mount(AppLoader);

    // test for having svg
    it('has img', () => {
        expect(wrapper.contains('img')).toBe(true)
    })
});