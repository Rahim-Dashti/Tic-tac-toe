const game_funcs = () => {
    function change_player(player, e) {
        if (player == 'X') {
            player = 'O'
        }
        else {
            player = 'X'
        }
        let player_name_upper = document.querySelector(".player-name")
        player_name_upper.innerHTML = player
        return(player)
    }
    
    function _board_change(e) {
        cell_number = e.target.classList[1].match(/\d+/)[0]
        if (e.target.innerHTML == '') {
            board_array[cell_number] = player
            e.target.innerHTML = player
            if (player == 'X') {
                e.target.style.background = 'rgb(235, 87, 87)'
            }
            if (player == 'O') {
                e.target.style.background = 'rgb(55, 129, 226)'
            }
            check_win(board_array)
            player = change_player(player)
        }
    }
    
    function board_change(e) {
        _board_change(e)
    }
    
    function alert_win(player) {
        let winner = document.querySelector('.winner-player')
        winner.innerHTML = player
        alert(player + ' Won!')
        for (i = 0; i < 9; i++) {
            let game_cell = document.querySelector(`.board-cell-${i}`)
            game_cell.innerHTML = board_array[i]
            game_cell.removeEventListener('click', board_change)
        }
    }
    
    function check_win(board_array) {
        if (board_array[0] != '' && board_array[0] == board_array[1] && board_array[1] == board_array[2]) {
            alert_win(player)
        }
        else if (board_array[3] != '' && board_array[3] == board_array[4] && board_array[4] == board_array[5]) {
            alert_win(player)
        }
        else if (board_array[6] != '' && board_array[6] == board_array[7] && board_array[7] == board_array[8]) {
            alert_win(player)
        }
        else if (board_array[0] != '' && board_array[0] == board_array[3] && board_array[3] == board_array[6]) {
            alert_win(player)
        }
        else if (board_array[1] != '' && board_array[1] == board_array[4] && board_array[4] == board_array[7]) {
            alert_win(player)
        }
        else if (board_array[2] != '' && board_array[2] == board_array[5] && board_array[5] == board_array[8]) {
            alert_win(player)
        }
        else if (board_array[0] != '' && board_array[0] == board_array[4] && board_array[4] == board_array[8]) {
            alert_win(player)
        }
        else if (board_array[2] != '' && board_array[2] == board_array[4] && board_array[4] == board_array[6]) {
            alert_win(player)
        }
        else if (board_array[0] != '' && board_array[1] != '' && board_array[2] != '' && board_array[3] != ''
                && board_array[4] != '' && board_array[5] != '' && board_array[6] != '' && board_array[7] != ''
                && board_array[8] != '') {
                    alert ("Tie!!!")
                }
    }

    function reset_board () {
        board_array = ['', '', '', '', '', '', '', '', '']
        player = 'X'
        let player_name_upper = document.querySelector('.player-name')
        player_name_upper.innerHTML = player
        for (i = 0; i < 9; i++) {
            let game_cell = document.querySelector(`.board-cell-${i}`)
            game_cell.innerHTML = board_array[i]
            game_cell.addEventListener('click', game.board_change)
            game_cell.style.background = 'white'
        }
    }

    function clear_board() {
        reset_board ()
    }

    return {board_change, clear_board}
}

let game = game_funcs()

let start_button = document.querySelector('.start-button')
start_button.addEventListener('click', game.clear_board)


