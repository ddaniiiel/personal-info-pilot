
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Upload, FileText, CheckCircle } from 'lucide-react';

const DocumentUploader: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzedDocs, setAnalyzedDocs] = useState<string[]>([]);
  const { toast } = useToast();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };
  
  const removeFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };
  
  const handleUpload = async () => {
    if (files.length === 0) {
      toast({
        title: "Keine Dateien ausgewählt",
        description: "Bitte wählen Sie mindestens eine Datei aus.",
        variant: "destructive"
      });
      return;
    }
    
    setUploading(true);
    
    try {
      // Simulate document upload
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Dokumente hochgeladen",
        description: `${files.length} Dokument(e) erfolgreich hochgeladen.`
      });
      
      // Start analysis
      setAnalyzing(true);
      
      // Simulate AI analysis
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const analyzedResults = files.map(file => file.name);
      setAnalyzedDocs(analyzedResults);
      setAnalyzing(false);
      
      toast({
        title: "Analyse abgeschlossen",
        description: "Alle Dokumente wurden erfolgreich analysiert."
      });
    } catch (error) {
      toast({
        title: "Fehler beim Hochladen",
        description: "Es gab ein Problem beim Hochladen Ihrer Dokumente.",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Dokumente hochladen</CardTitle>
        <CardDescription>
          Laden Sie Ihre Dokumente hoch und lassen Sie sie durch unsere KI analysieren.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
            <Upload className="h-10 w-10 mx-auto text-gray-400" />
            <p className="mt-2 text-sm text-gray-500">
              Ziehen Sie Dateien hierher oder klicken Sie, um auszuwählen
            </p>
            <Input
              id="fileUpload"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
            <Label htmlFor="fileUpload">
              <Button
                variant="outline"
                className="mt-2"
                type="button"
                disabled={uploading || analyzing}
              >
                Dateien auswählen
              </Button>
            </Label>
          </div>
          
          {files.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium">Ausgewählte Dateien</h3>
              <ul className="mt-2 border rounded-md divide-y">
                {files.map((file, index) => (
                  <li key={index} className="flex items-center justify-between py-2 px-3">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm truncate" style={{ maxWidth: '200px' }}>
                        {file.name}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => removeFile(index)}
                      disabled={uploading || analyzing}
                    >
                      Entfernen
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {analyzedDocs.length > 0 && (
            <div className="mt-4 border rounded-md p-4 bg-green-50">
              <h3 className="text-sm font-medium flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                Analyse-Ergebnisse
              </h3>
              <ul className="mt-2 divide-y">
                {analyzedDocs.map((doc, index) => (
                  <li key={index} className="py-2">
                    <p className="text-sm font-medium">{doc}</p>
                    <p className="text-xs text-gray-500">
                      Empfehlung: Die Dokumentation ist vollständig. Optimierungspotential bei Abschnitt 2.3.
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleUpload} 
          disabled={files.length === 0 || uploading || analyzing}
          className="w-full"
        >
          {uploading ? "Wird hochgeladen..." : 
            analyzing ? "Wird analysiert..." : 
            "Dokumente hochladen und analysieren"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentUploader;
