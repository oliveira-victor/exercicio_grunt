let titulo = document.querySelector('#titulo')
        let anotacao = document.querySelector('#anotacao')
        const board = document.querySelector('.board')

        function post() {
            if (titulo.value == '' || anotacao.value == '') {
                alert('Por favor, preencha os campos em branco');
            } else {
                board.innerHTML = `
                <div class="note">
                        <div class="new-title">
                            ${titulo.value}
                        </div>
                        <div class="new-text">
                            ${anotacao.value}
                        </div>
                    </div>
                `
                titulo.value = ''
                anotacao.value = ''
            }
        }