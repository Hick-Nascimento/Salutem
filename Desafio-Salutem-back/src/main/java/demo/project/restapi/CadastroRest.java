package demo.project.restapi;

import java.util.List;

import demo.project.restapi.database.RepositorioCadastro;
import demo.project.restapi.entidade.Cadastro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/cadastro") // Métodos com as quatro operações básicas
public class CadastroRest {
    @Autowired
    private RepositorioCadastro repositorio;

    @GetMapping // retorna lista de contatos

    public List<Cadastro> listar() {
        return repositorio.findAll();
    }

    @PostMapping // adiciona um novo cadastro
    public void salvar(@RequestBody Cadastro cadastro) {
        repositorio.save(cadastro);
    }

    @PutMapping // Atualiza um cadastro já existente

    public void alterar(@RequestBody Cadastro cadastro) {
        if (cadastro.getId() > 0)
            repositorio.save(cadastro);
    }

    @DeleteMapping // exclui um cadastro
    public void excluir(@RequestBody Cadastro cadastro) {
        repositorio.delete(cadastro);
    }
}