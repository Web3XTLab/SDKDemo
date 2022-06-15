import dynamic from 'next/dynamic';

export default dynamic(
    () =>
        import('../components/Calculator')
            .then(({Calculator}) => Calculator));