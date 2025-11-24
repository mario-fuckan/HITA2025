const povecajA = () => {
    const aNode = document.querySelector("#a")

    aNode.value = Number(aNode.value) + 1
}

const povecajB = () => {
    const bNode = document.querySelector("#b")

    bNode.value = Number(bNode.value) + 2
}

const zbroj = () => {
    const a = Number(document.querySelector("#a").value)
    const b = Number(document.querySelector("#b").value)

    document.querySelector("#rezultat").value = a + b
}