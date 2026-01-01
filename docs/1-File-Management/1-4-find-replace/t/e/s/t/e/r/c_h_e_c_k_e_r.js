function respond_to_determinant_submission() {
  const submission = document.getElementById('determinant').value.replaceAll(' ', '').replaceAll('\n', '');

  if      (submission === '46') { alert('Correct - well done!');                                }
  else if (submission ===  '0') { alert('Hmm. What does the calculator say to 2 1 1 - 1 1 2?'); }
  else                          { alert('Try again.');                                          }
}


function respond_to_chemical_reaction_submission() {
  const solution = 'C_9H_11NO_2+3O_2+C_6H_8O_6+2C_9H_15N_5O_3+C_15H_22N_6O_5S'                   + '-->' + 
                   'C_9H_11NO_3+2O_2+H_2O+C_6H_8O_6+C_9H_15N_5O_3+C_15H_22N_6O_5S+C_9H_13N_5O_3' + '-->' + 
                   'C_9H_11NO_4+O_2+2H_2O+C_6H_8O_6+C_15H_22N_6O_5S+2C_9H_13N_5O_3'              + '-->' + 
                   'C_8H_11NO_2+O_2+2H_2O+CO_2+C_6H_8O_6+C_15H_22N_6O_5S+2C_9H_13N_5O_3'         + '-->' + 
                   'C_8H_11NO_3+3H_2O+CO_2+C_6H_6O_6+C_15H_22N_6O_5S+2C_9H_13N_5O_3'             + '-->' + 
                   'C_9H_13NO_3+3H_2O+CO_2+C_6H_6O_6+C_14H_20N_6O_5S+2C_9H_13N_5O_3'             + '-->' +
                   'C_9H_13NO_3+2H_2O+CO_2+C_6H_6O_6+C_4H_9NO_2S+C_10H_13N_5O_4+2C_9H_13N_5O_3';

  const submission = document.getElementById('chemical_reaction').value.replaceAll(' ', '').replaceAll('\n', '');

  alert(submission === solution ? 'Correct - well done!' : 'Try again.');
}


function respond_to_rna_submission() {
  const solution = 'auguucgccgaccguugacuauucucuacaaaccacaaagacauuggaacacuauaccuauuauucggcgcaugagcuggaguccuaggcacagcu' +
                   'cuaagccuccuuauucgagccgagcugggccagccaggcaaccuucuagguaacgaccacaucuacaacguuaucgucacagcccaugcauuugua' +
                   'auaaucuucuucauaguaauacccaucauaaucggaggcuuuggcaacugacuaguuccccuaauaaucggugcccccgauauggcguuuccccgc' +
                   'auaaacaacauaagcuucugacucuuaccucccucucuccuacuccugcucgcaucugcuauaguggaggccggagcaggaacagguugaacaguc' +
                   'uacccucccuuagcagggaacuacucccacccuggagccuccguagaccuaaccaucuucuccuuacaccuagcaggugucuccucuaucuuaggg' +
                   'gccaucaauuucaucacaacaauuaucaauauaaaacccccugccauaacccaauaccaaacgccccucuucgucugauccguccuaaucacagca' +
                   'guccuacuucuccuaucucucccaguccuagcugcuggcaucacuauacuacuaacagaccgcaaccucaacaccaccuucuucgaccccgccgga' +
                   'ggaggagaccccauucuauaccaacaccuauucugauuuuucggucacccugaaguuuauauucuuauccuaccaggcuucggaauaaucucccau' +
                   'auuguaacuuacuacuccggaaaaaaagaaccauuuggauacauagguauggucugagcuaugauaucaauuggcuuccuaggguuuaucguguga' +
                   'gcacaccauauauuuacaguaggaauagacguagacacacgagcauauuucaccuccgcuaccauaaucaucgcuauccccaccggcgucaaagua' +
                   'uuuagcugacucgccacacuccacggaagcaauaugaaaugaucugcugcagugcucugagcccuaggauucaucuuucuuuucaccguagguggc' +
                   'cugacuggcauuguauuagcaaacucaucacuagacaucguacuacacgacacguacuacguuguagcccacuuccacuauguccuaucaauagga' +
                   'gcuguauuugccaucauaggaggcuucauucacugauuuccccuauucucaggcuacacccuagaccaaaccuacgccaaaauccauuucacuauc' +
                   'auauucaucggcguaaaucuaacuuucuucccacaacacuuucucggccuauccggaaugccccgacguuacucggacuaccccgaugcauacacc' +
                   'acaugaaacauccuaucaucuguaggcucauucauuucucuaacagcaguaauauuaauaauuuucaugauuugagaagccuucgcuucgaagcga' +
                   'aaaguccuaauaguagaagaacccuccauaaaccuggagugacuauauggaugccccccacccuaccacacauucgaagaacccguauacauaaaa' +
                   'ucuaga';

  const solation = 'uacaagcggcuggcaacugauaagagauguuugguguuucuguaaccuugugauauggauaauaagccgcguacucgaccucaggauccgugucga' +
                   'gauucggaggaauaagcucggcucgacccggucgguccguuggaagauccauugcugguguagauguugcaauagcagugucggguacguaaacau' +
                   'uauuagaagaaguaucauuauggguaguauuagccuccgaaaccguugacugaucaaggggauuauuagccacgggggcuauaccgcaaaggggcg' +
                   'uauuuguuguauucgaagacugagaauggagggagagaggaugaggacgagcguagacgauaucaccuccggccucguccuuguccaacuugucag' +
                   'augggagggaaucgucccuugaugagggugggaccucggaggcaucuggauugguagaagaggaauguggaucguccacagaggagauagaauccc' +
                   'cgguaguuaaaguaguguuguuaauaguuauauuuugggggacgguauuggguuaugguuugcggggagaagcagacuaggcaggauuagugucgu' +
                   'caggaugaagaggauagagagggucaggaucgacgaccguagugauaugaugauugucuggcguuggaguugugguggaagaagcuggggcggccu' +
                   'ccuccucugggguaagauaugguuguggauaagacuaaaaagccagugggacuucaaauauaagaauaggaugguccgaagccuuauuagagggua' +
                   'uaacauugaaugaugaggccuuuuuuucuugguaaaccuauguauccauaccagacucgauacuauaguuaaccgaaggaucccaaauagcacacu' +
                   'cgugugguauauaaaugucauccuuaucugcaucugugugcucguauaaaguggaggcgaugguauuaguagcgauagggguggccgcaguuucau' +
                   'aaaucgacugagcggugugaggugccuucguuauacuuuacuagacgacgucacgagacucgggauccuaaguagaaagaaaaguggcauccaccg' +
                   'gacugaccguaacauaaucguuugaguagugaucuguagcaugaugugcugugcaugaugcaacaucgggugaaggugauacaggauaguuauccu' +
                   'cgacauaaacgguaguauccuccgaaguaagugacuaaaggggauaagaguccgaugugggaucugguuuggaugcgguuuuagguaaagugauag' +
                   'uauaaguagccgcauuuagauugaaagaaggguguugugaaagagccggauaggccuuacggggcugcaaugagccugauggggcuacguaugugg' +
                   'uguacuuuguaggauaguagacauccgaguaaguaaagagauugucgucauuauaauuauuaaaaguacuaaacucuucggaagcgaagcuucgcu' +
                   'uuucaggauuaucaucuucuugggagguauuuggaccucacugauauaccuacggggggugggaugguguguaagcuucuugggcauauguauuuu' +
                   'agaucu';

  const submission = document.getElementById('rna').value.replaceAll(' ', '').replaceAll('\n', '');

  if      (submission === solution) { alert('Correct - well done!');                                                   }
  else if (submission === solation) { alert('Hmmm. Did you mix up the coding strand and template strand of the DNA?'); }
  else                              { alert('Try again.');                                                             }
}


function respond_to_amino_acids_submission() {
  const solution = 'MFADRWLFSTNHKDIGTLYLLFGAWAGVLGTA' +
                   'LSLLIRAELGQPGNLLGNDHIYNVIVTAHAFV' +
                   'MIFFMVMPIMIGGFGNWLVPLMIGAPDMAFPR' +
                   'MNNMSFWLLPPSLLLLLASAMVEAGAGTGWTV' +
                   'YPPLAGNYSHPGASVDLTIFSLHLAGVSSILG' +
                   'AINFITTIINMKPPAMTQYQTPLFVWSVLITA' +
                   'VLLLLSLPVLAAGITMLLTDRNLNTTFFDPAG' +
                   'GGDPILYQHLFWFFGHPEVYILILPGFGMISH' +
                   'IVTYYSGKKEPFGYMGMVWAMMSIGFLGFIVW' +
                   'AHHMFTVGMDVDTRAYFTSATMIIAIPTGVKV' +
                   'FSWLATLHGSNMKWSAAVLWALGFIFLFTVGG' +
                   'LTGIVLANSSLDIVLHDTYYVVAHFHYVLSMG' +
                   'AVFAIMGGFIHWFPLFSGYTLDQTYAKIHFTI' +
                   'MFIGVNLTFFPQHFLGLSGMPRRYSDYPDAYT' +
                   'TWNILSSVGSFISLTAVMLMIFMIWEAFASKR' +
                   'KVLMVEEPSMNLEWLYGCPPPYHTFEEPVYMK' +
                   'S"';

  const submission = document.getElementById('amino_acids').value.replaceAll(' ', '').replaceAll('\n', '');

  alert(submission === solution ? 'Correct - well done!' : 'Try again.');
}


document.getElementById('submit_determinant'      ).addEventListener('click', respond_to_determinant_submission);
document.getElementById('submit_chemical_reaction').addEventListener('click', respond_to_chemical_reaction_submission);
document.getElementById('submit_rna'              ).addEventListener('click', respond_to_rna_submission);
document.getElementById('submit_amino_acids'      ).addEventListener('click', respond_to_amino_acids_submission);

