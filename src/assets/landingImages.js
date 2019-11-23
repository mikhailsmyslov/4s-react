const base = '//source.unsplash.com';
const size = '800x400';
const buildSrc = id => `${base}/${id}/${size}`;

const images = [
    {
        id: 'iY6QMkP66mI',
        title: 'Wellcome!',
        text: 'This is a small test assignment app.'
    },
    {
        id: '5eBW5GomfhY',
        title: 'Technologies:',
        text: 'It is built with React and Bootstrap. Includes news block and basic authentification.'
    },
    {
        id: 'mDinBvq1Sfg',
        title: 'Try out!',
        text: 'Log in and click around!'
    }
];

const processedImages = images.map(image => ({ ...image, src: buildSrc(image.id), size }));
export default processedImages;