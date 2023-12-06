const listItens = [];

while (true) {
    const menuOpition = prompt(` 
        digite a opção desejada: 
            1 - Cadastrar item
            2 - Ver itens cadastrados
            3 - Remover item cadastrado
            4 -Sair do programa
    `);
    if (menuOpition === "4" || menuOpition === null){
        break
    }
    if (menuOpition === "") {
        alert("Por favor, escolha alguma dessas opções")
        continue
    }
    
    switch (menuOpition) {
        case "1":
            while (true) {
                let addItem = prompt("Digite o nome do item para adicionar:")
                
                if (addItem === null){
                    break;
                }

                addItem = addItem.trim().split("").filter(Boolean).join("")
                console.log(addItem);

                if(addItem.trim() === ""){
                    alert("Por favor, digite um nome para cadastrar")
                    continue;
                }
            
                if (listItens.includes(addItem)) {
                    alert("item já cadastrado!")
                    
                } else {
                        listItens.push(addItem)
                        alert(`"${addItem}" cadastrado(a) com sucesso!`)
                    }
            }   
                break;
        case "2":
            if (listItens.length === 0) {
                alert("Lista vazia!")
            }else{
                alert(listItens.join("-"))
             }
            break;
        case "3":
            console.log("opção 3");
            if (listItens.length === 1) {
                const itemNameToRemove = listItens.pop()
                alert (`"${itemNameToRemove}" foi removido com sucesso!`)
                break;
            }

            while (true) {
                if (listItens.length === 0) {
                    alert("lista vazia!")
                    break;
                } else {
                    let itemNameToRemove = prompt("Digite o nome para remover:")

                    if (itemNameToRemove === null) break;
                    
                    itemNameToRemove = itemNameToRemove.trim().split("").filter(Boolean).join("")

                    if (itemNameToRemove === "") {
                        alert("Por favor, inserir nome para remover.")
                        continue;
                    }

                    if (listItens.includes(itemNameToRemove)) {
                        listItens.splice(listItens.indexOf(itemNameToRemove), 1)
                        alert(`"${itemNameToRemove}" foi removido com sucesso!`)
                    } else {
                        alert("Item não encontrado!")
                    }
                }
            }
            break;
        default:
            alert ("opção inválida!")
            break;
    }
}

alert("Programa encerrado");