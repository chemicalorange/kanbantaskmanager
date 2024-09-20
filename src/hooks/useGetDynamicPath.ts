type useGetDynamicPathProps = {
    path: string,
    param: string,
    dynamicValue: string
}

const useGetDynamicPath = ({path, param, dynamicValue}: useGetDynamicPathProps) => {
    return path.replace(param, dynamicValue)
}

export default useGetDynamicPath