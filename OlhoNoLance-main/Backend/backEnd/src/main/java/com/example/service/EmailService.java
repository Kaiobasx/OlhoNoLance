package com.example.service;

import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.io.IOException;

@Service
public class EmailService {

    @Value("${sendgrid.api.key}")
    private String apiKey;

    public void enviarEmail(String para, String assunto, String mensagemHtml) {

        Email from = new Email("olhonolance@gmail.com");
        Email to = new Email(para);

        Content content = new Content("text/html", mensagemHtml);
        Mail mail = new Mail(from, assunto, to, content);

        SendGrid sg = new SendGrid(apiKey);

        Request request = new Request();

        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());

            sg.api(request);

        } catch (IOException e) {
            throw new RuntimeException("Erro ao enviar email: " + e.getMessage());
        }
    }
}
